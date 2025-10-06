import type { ComponentChildren } from 'preact';
import classNames from 'classnames';
import { BaseIcon } from '../Icon/Icon';
import type { Icon } from '../Icon/Icon';
import styles from './Input.module.scss';

export interface InputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: Event) => void;
    onInput?: (e: Event) => void;
    onFocus?: (e: Event) => void;
    onBlur?: (e: Event) => void;
    disabled?: boolean;
    error?: boolean;
    invalid?: boolean;
    required?: boolean;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
    variant?: 'default' | 'outline' | 'filled';
    startIcon?: boolean;
    iconName?: Icon['iconName'];
    iconVariant?: 'default' | 'primary' | 'secondary';
    className?: string;
    children?: ComponentChildren;
    [key: string]: any;
}

/**
 * 🧩 Flexible Input component
 * - Supports label, icon, error, variants
 * - Allows children for helper/error text
 */
export const Input = ({
    label,
    placeholder,
    value,
    onChange,
    onInput,
    onFocus,
    onBlur,
    disabled = false,
    error = false,
    invalid = false,
    required = false,
    type = 'text',
    variant = 'default',
    startIcon = false,
    iconName = 'Exclamation',
    iconVariant = 'default',
    className = '',
    children,
    ...props
}: InputProps) => {
    // Generate a unique ID for accessibility
    const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const inputWrapperClass = classNames(
        styles.inputWrapper,
        {
            [styles.inputWrapperOutline]: variant === 'outline',
            [styles.inputWrapperFilled]: variant === 'filled',
            [styles.inputWrapperError]: error,
            [styles.inputWrapperInvalid]: invalid,
            [styles.inputWrapperDisabled]: disabled,
            [styles.inputWrapperWithIcon]: startIcon || required,
        },
        className
    );

    const inputClass = classNames(styles.input, {
        [styles.inputWithIcon]: startIcon || required,
    });

    const helperClass = classNames(styles.helper, {
        [styles.helperError]: error,
        [styles.helperInvalid]: invalid,
    });

    return (
        <div className={styles.container}>
            {/* Label */}
            {label && (
                <label className={styles.label} htmlFor={inputId}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}

            {/* Input field + optional icon */}
            <div className={inputWrapperClass}>
                {(startIcon || required) && (
                    <div className={styles.iconWrapper}>
                        <BaseIcon 
                            iconName={required ? "Exclamation" : iconName} 
                            variant={iconVariant} 
                            size="md" 
                        />
                    </div>
                )}
                <input
                    id={inputId}
                    className={inputClass}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onInput={onInput}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    disabled={disabled}
                    required={required}
                    {...props}
                />
            </div>

            {/* Children slot for helper or error text */}
            {children && <div className={helperClass}>{children}</div>}
        </div>
    );
};

/**
 * 💡 Preconfigured variant with exclamation icon
 * - Convenient for warning or validation use
 */
export const InputWithExclamation = ({
    iconVariant = 'primary',
    ...props
}: Omit<InputProps, 'startIcon' | 'iconName'>) => (
    <Input {...props} startIcon iconName="Exclamation" iconVariant={iconVariant} />
);
