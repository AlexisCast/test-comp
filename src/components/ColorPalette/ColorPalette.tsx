import colors from '../../styles/colors.module.scss';
import styles from './ColorPalette.module.scss';

interface ColorSwatchProps {
  name: string;
  value: string;
  hexValue?: string;
  className?: string;
}

const ColorSwatch = ({ name, value, hexValue, className = '' }: ColorSwatchProps) => (
  <div className={`${styles.colorSwatch} ${className}`}>
    <div 
      className={styles.colorPreview} 
      style={{ backgroundColor: value }}
      title={`${name}: ${value}${hexValue ? ` (${hexValue})` : ''}`}
    />
    <div className={styles.colorInfo}>
      <span className={styles.colorName}>{name}</span>
      <span className={styles.colorValue}>{value}</span>
      {hexValue && <span className={styles.colorHex}>{hexValue}</span>}
    </div>
  </div>
);

interface ColorGroupProps {
  title: string;
  colors: Array<{ name: string; value: string; hexValue?: string; key: string }>;
}

const ColorGroup = ({ title, colors: colorList }: ColorGroupProps) => (
  <div className={styles.colorGroup}>
    <h3 className={styles.colorGroupTitle}>{title}</h3>
    <div className={styles.colorGrid}>
      {colorList.map(({ name, value, hexValue, key }) => (
        <ColorSwatch key={key} name={name} value={value} hexValue={hexValue} />
      ))}
    </div>
  </div>
);

export interface ColorPaletteProps {
  /** Show only specific color categories */
  categories?: string[];
}

export const ColorPalette = ({ categories }: ColorPaletteProps) => {
  const colorGroups = [
    {
      title: 'Primary Colors',
      key: 'primary',
      colors: [
        { name: 'Primary 50', value: 'var(--primary-50)', hexValue: colors.primary50, key: 'primary50' },
        { name: 'Primary 100', value: 'var(--primary-100)', hexValue: colors.primary100, key: 'primary100' },
        { name: 'Primary 200', value: 'var(--primary-200)', hexValue: colors.primary200, key: 'primary200' },
        { name: 'Primary 300', value: 'var(--primary-300)', hexValue: colors.primary300, key: 'primary300' },
        { name: 'Primary 400', value: 'var(--primary-400)', hexValue: colors.primary400, key: 'primary400' },
        { name: 'Primary 500', value: 'var(--primary-500)', hexValue: colors.primary500, key: 'primary500' },
        { name: 'Primary 600', value: 'var(--primary-600)', hexValue: colors.primary600, key: 'primary600' },
        { name: 'Primary 700', value: 'var(--primary-700)', hexValue: colors.primary700, key: 'primary700' },
        { name: 'Primary 800', value: 'var(--primary-800)', hexValue: colors.primary800, key: 'primary800' },
        { name: 'Primary 900', value: 'var(--primary-900)', hexValue: colors.primary900, key: 'primary900' },
        { name: 'Primary 950', value: 'var(--primary-950)', hexValue: colors.primary950, key: 'primary950' },
      ]
    },
    {
      title: 'Secondary Colors',
      key: 'secondary',
      colors: [
        { name: 'Secondary 50', value: 'var(--secondary-50)', hexValue: colors.secondary50, key: 'secondary50' },
        { name: 'Secondary 100', value: 'var(--secondary-100)', hexValue: colors.secondary100, key: 'secondary100' },
        { name: 'Secondary 200', value: 'var(--secondary-200)', hexValue: colors.secondary200, key: 'secondary200' },
        { name: 'Secondary 300', value: 'var(--secondary-300)', hexValue: colors.secondary300, key: 'secondary300' },
        { name: 'Secondary 400', value: 'var(--secondary-400)', hexValue: colors.secondary400, key: 'secondary400' },
        { name: 'Secondary 500', value: 'var(--secondary-500)', hexValue: colors.secondary500, key: 'secondary500' },
        { name: 'Secondary 600', value: 'var(--secondary-600)', hexValue: colors.secondary600, key: 'secondary600' },
        { name: 'Secondary 700', value: 'var(--secondary-700)', hexValue: colors.secondary700, key: 'secondary700' },
        { name: 'Secondary 800', value: 'var(--secondary-800)', hexValue: colors.secondary800, key: 'secondary800' },
        { name: 'Secondary 900', value: 'var(--secondary-900)', hexValue: colors.secondary900, key: 'secondary900' },
        { name: 'Secondary 950', value: 'var(--secondary-950)', hexValue: colors.secondary950, key: 'secondary950' },
      ]
    },
    {
      title: 'Neutral Colors',
      key: 'neutral',
      colors: [
        { name: 'Neutral 50', value: 'var(--neutral-50)', hexValue: colors.neutral50, key: 'neutral50' },
        { name: 'Neutral 100', value: 'var(--neutral-100)', hexValue: colors.neutral100, key: 'neutral100' },
        { name: 'Neutral 200', value: 'var(--neutral-200)', key: 'neutral200' },
        { name: 'Neutral 300', value: 'var(--neutral-300)', key: 'neutral300' },
        { name: 'Neutral 400', value: 'var(--neutral-400)', key: 'neutral400' },
        { name: 'Neutral 500', value: 'var(--neutral-500)', key: 'neutral500' },
        { name: 'Neutral 600', value: 'var(--neutral-600)', key: 'neutral600' },
        { name: 'Neutral 700', value: 'var(--neutral-700)', key: 'neutral700' },
        { name: 'Neutral 800', value: 'var(--neutral-800)', key: 'neutral800' },
        { name: 'Neutral 900', value: 'var(--neutral-900)', key: 'neutral900' },
        { name: 'Neutral 950', value: 'var(--neutral-950)', key: 'neutral950' },
      ]
    },
    {
      title: 'Success Colors',
      key: 'success',
      colors: [
        { name: 'Success 50', value: 'var(--success-50)', key: 'success50' },
        { name: 'Success 100', value: 'var(--success-100)', key: 'success100' },
        { name: 'Success 200', value: 'var(--success-200)', key: 'success200' },
        { name: 'Success 300', value: 'var(--success-300)', key: 'success300' },
        { name: 'Success 400', value: 'var(--success-400)', key: 'success400' },
        { name: 'Success 500', value: 'var(--success-500)', key: 'success500' },
        { name: 'Success 600', value: 'var(--success-600)', key: 'success600' },
        { name: 'Success 700', value: 'var(--success-700)', key: 'success700' },
        { name: 'Success 800', value: 'var(--success-800)', key: 'success800' },
        { name: 'Success 900', value: 'var(--success-900)', key: 'success900' },
        { name: 'Success 950', value: 'var(--success-950)', key: 'success950' },
      ]
    },
    {
      title: 'Warning Colors',
      key: 'warning',
      colors: [
        { name: 'Warning 50', value: 'var(--warning-50)', key: 'warning50' },
        { name: 'Warning 100', value: 'var(--warning-100)', key: 'warning100' },
        { name: 'Warning 200', value: 'var(--warning-200)', key: 'warning200' },
        { name: 'Warning 300', value: 'var(--warning-300)', key: 'warning300' },
        { name: 'Warning 400', value: 'var(--warning-400)', key: 'warning400' },
        { name: 'Warning 500', value: 'var(--warning-500)', key: 'warning500' },
        { name: 'Warning 600', value: 'var(--warning-600)', key: 'warning600' },
        { name: 'Warning 700', value: 'var(--warning-700)', key: 'warning700' },
        { name: 'Warning 800', value: 'var(--warning-800)', key: 'warning800' },
        { name: 'Warning 900', value: 'var(--warning-900)', key: 'warning900' },
        { name: 'Warning 950', value: 'var(--warning-950)', key: 'warning950' },
      ]
    },
    {
      title: 'Error Colors',
      key: 'error',
      colors: [
        { name: 'Error 50', value: 'var(--error-50)', key: 'error50' },
        { name: 'Error 100', value: 'var(--error-100)', key: 'error100' },
        { name: 'Error 200', value: 'var(--error-200)', key: 'error200' },
        { name: 'Error 300', value: 'var(--error-300)', key: 'error300' },
        { name: 'Error 400', value: 'var(--error-400)', key: 'error400' },
        { name: 'Error 500', value: 'var(--error-500)', key: 'error500' },
        { name: 'Error 600', value: 'var(--error-600)', key: 'error600' },
        { name: 'Error 700', value: 'var(--error-700)', key: 'error700' },
        { name: 'Error 800', value: 'var(--error-800)', key: 'error800' },
        { name: 'Error 900', value: 'var(--error-900)', key: 'error900' },
        { name: 'Error 950', value: 'var(--error-950)', key: 'error950' },
      ]
    },
    {
      title: 'Info Colors',
      key: 'info',
      colors: [
        { name: 'Info 50', value: 'var(--info-50)', key: 'info50' },
        { name: 'Info 100', value: 'var(--info-100)', key: 'info100' },
        { name: 'Info 200', value: 'var(--info-200)', key: 'info200' },
        { name: 'Info 300', value: 'var(--info-300)', key: 'info300' },
        { name: 'Info 400', value: 'var(--info-400)', key: 'info400' },
        { name: 'Info 500', value: 'var(--info-500)', key: 'info500' },
        { name: 'Info 600', value: 'var(--info-600)', key: 'info600' },
        { name: 'Info 700', value: 'var(--info-700)', key: 'info700' },
        { name: 'Info 800', value: 'var(--info-800)', key: 'info800' },
        { name: 'Info 900', value: 'var(--info-900)', key: 'info900' },
        { name: 'Info 950', value: 'var(--info-950)', key: 'info950' },
      ]
    },
    {
      title: 'Base Colors',
      key: 'base',
      colors: [
        { name: 'White', value: colors.white, key: 'white' },
        { name: 'Black', value: colors.black, key: 'black' },
      ]
    },
    {
      title: 'Semantic Colors',
      key: 'semantic',
      colors: [
        { name: 'Primary', value: colors.primary, key: 'primary-alias' },
        { name: 'Secondary', value: colors.secondary, key: 'secondary-alias' },
        { name: 'Success', value: colors.success, key: 'success-alias' },
        { name: 'Warning', value: colors.warning, key: 'warning-alias' },
        { name: 'Error', value: colors.error, key: 'error-alias' },
        { name: 'Info', value: colors.info, key: 'info-alias' },
      ]
    },
    {
      title: 'Background Colors',
      key: 'background',
      colors: [
        { name: 'Primary Background', value: colors.bgPrimary, key: 'bg-primary' },
        { name: 'Secondary Background', value: colors.bgSecondary, key: 'bg-secondary' },
        { name: 'Tertiary Background', value: colors.bgTertiary, key: 'bg-tertiary' },
      ]
    },
    {
      title: 'Text Colors',
      key: 'text',
      colors: [
        { name: 'Primary Text', value: colors.textPrimary, key: 'text-primary' },
        { name: 'Secondary Text', value: colors.textSecondary, key: 'text-secondary' },
        { name: 'Tertiary Text', value: colors.textTertiary, key: 'text-tertiary' },
        { name: 'Inverse Text', value: colors.textInverse, key: 'text-inverse' },
      ]
    },
    {
      title: 'Border Colors',
      key: 'border',
      colors: [
        { name: 'Primary Border', value: colors.borderPrimary, key: 'border-primary' },
        { name: 'Secondary Border', value: colors.borderSecondary, key: 'border-secondary' },
        { name: 'Focus Border', value: colors.borderFocus, key: 'border-focus' },
      ]
    },
  ];

  const filteredGroups = categories 
    ? colorGroups.filter(group => categories.includes(group.key))
    : colorGroups;

  return (
    <div className={styles.colorPalette}>
      <div className={styles.colorPaletteHeader}>
        <h2>Color Palette</h2>
        <p>Complete color system with semantic naming and consistent scales.</p>
      </div>
      
      <div className={styles.colorPaletteContent}>
        {filteredGroups.map(group => (
          <ColorGroup 
            key={group.key}
            title={group.title}
            colors={group.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;