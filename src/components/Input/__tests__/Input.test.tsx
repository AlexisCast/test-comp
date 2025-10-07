import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { Input, InputWithExclamation } from '../Input';
import styles from '../Input.module.scss';

// Mock the Icon component - simple mock that renders an SVG
vi.mock('../../Icon', () => ({
  BaseIcon: ({ size }: any) => (
    <svg 
      className="mocked-icon"
      width={size === 'sm' ? 16 : size === 'lg' ? 32 : 24}
      height={size === 'sm' ? 16 : size === 'lg' ? 32 : 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 14V5h2v9zm0 5v-2h2v2z" fill="currentColor" />
    </svg>
  )
}));

describe('Input component (Preact)', () => {
    it('renders label and input', () => {
        render(<Input label="Username" />);
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('applies required class and shows *', () => {
        render(<Input label="Email" required />);
        const label = screen.getByText('Email');
        expect(label.querySelector('span')).toHaveClass(styles.required);
    });

    it('applies error class when error prop is true', () => {
        // Test class application without triggering problematic CSS parsing
        const { container } = render(<Input error> Error message </Input>);
        
        // Find the input wrapper by looking for the element with error class
        const wrapper = container.querySelector(`.${styles.inputWrapperError}`);
        expect(wrapper).toBeInTheDocument();

        const helperText = screen.getByText('Error message');
        expect(helperText).toHaveClass(styles.helperError);
    });

    it('applies invalid class when invalid prop is true', () => {
        render(<Input invalid>Invalid input</Input>);
        const wrapper = screen.getByRole('textbox').parentElement!;
        expect(wrapper).toHaveClass(styles.inputWrapperInvalid);

        const helperText = screen.getByText('Invalid input');
        expect(helperText).toHaveClass(styles.helperInvalid);
    });

    it('applies disabled class and disables input', () => {
        render(<Input disabled />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input).toBeDisabled();

        const wrapper = input.parentElement!;
        expect(wrapper).toHaveClass(styles.inputWrapperDisabled);
    });

    it('renders start icon when startIcon prop is true', () => {
        const { container } = render(<Input startIcon />);
        
        // Look for the SVG element directly in the container
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
        
        // Check that the icon wrapper is present
        const iconWrapper = container.querySelector(`.${styles.iconWrapper}`);
        expect(iconWrapper).toBeInTheDocument();
    });

    it('InputWithExclamation uses exclamation icon', () => {
        const { container } = render(<InputWithExclamation />);
        
        // Look for the SVG element directly
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
        
        // Check that the icon wrapper is present
        const iconWrapper = container.querySelector(`.${styles.iconWrapper}`);
        expect(iconWrapper).toBeInTheDocument();
        
        // Verify that input has icon styling
        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input).toHaveClass(styles.inputWithIcon);
    });

    it('handles onChange and onInput events', () => {
        const handleChange = vi.fn();
        const handleInput = vi.fn();
        render(<Input onChange={handleChange} onInput={handleInput} />);

        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.input(input, { target: { value: 'test' } });

        expect(handleChange).toHaveBeenCalled();
        expect(handleInput).toHaveBeenCalled();
    });

    it('has the correct container class', () => {
        const { container } = render(<div className={styles.container}>Content</div>);
        const div = container.firstChild as HTMLElement;

        // Verify the class is applied (CSS modules now return scoped class names)
        expect(div).toHaveClass(styles.container);
        expect(styles.container).toContain('container'); // CSS modules create scoped names containing the original
    });

    it('Input component applies container class', () => {
        const { container } = render(<Input label="Test" />);
        const containerDiv = container.querySelector(`.${styles.container}`);
        expect(containerDiv).toBeInTheDocument();
    });

    it('container has correct CSS properties', () => {
        const { container } = render(<div className={styles.container}>Content</div>);
        const div = container.firstChild as HTMLElement;

        // Now that CSS modules are processed, we can test computed styles directly
        const computedStyle = window.getComputedStyle(div);

        expect(computedStyle.display).toBe('flex');
        expect(computedStyle.flexDirection).toBe('column');
        expect(computedStyle.gap).toBe('8px');
        expect(computedStyle.width).toBe('100%');
        expect(computedStyle.minWidth).toBe('16px');
    });
});
