import { motion } from 'framer-motion';
import {
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]',
  secondary:
    'glass text-neutral-900 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] dark:text-white',
  ghost: 'text-neutral-700 hover:text-blue-500 dark:text-neutral-300',
};

const baseClasses =
  'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-[background-color,box-shadow,border-color] duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black';

interface RippleItem {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface CommonProps {
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

// Motion components redefine a handful of DOM event handlers (e.g. onAnimationStart/onDrag*)
// with animation-specific signatures, so those must be omitted from the native HTML props.
type MotionConflictingProps =
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd';

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, MotionConflictingProps> & { as?: 'button' };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, MotionConflictingProps> & { as: 'a' };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({ variant = 'primary', icon, className = '', children, ...props }: ButtonProps) {
  const [ripples, setRipples] = useState<RippleItem[]>([]);
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const spawnRipple = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;
    const id = Date.now() + Math.random();
    setRipples((prev) => [
      ...prev,
      { id, x: event.clientX - rect.left - size / 2, y: event.clientY - rect.top - size / 2, size },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 650);
  };

  const rippleLayer = ripples.map((ripple) => (
    <span
      key={ripple.id}
      className="ripple-span"
      style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
    />
  ));

  if (props.as === 'a') {
    const { as: _as, onClick, ...anchorProps } = props;
    return (
      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...anchorProps}
        onClick={(event) => {
          spawnRipple(event);
          onClick?.(event);
        }}
      >
        {rippleLayer}
        {icon}
        {children}
      </motion.a>
    );
  }

  const { as: _as, onClick, ...buttonProps } = props;
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...buttonProps}
      onClick={(event) => {
        spawnRipple(event);
        onClick?.(event);
      }}
    >
      {rippleLayer}
      {icon}
      {children}
    </motion.button>
  );
}
