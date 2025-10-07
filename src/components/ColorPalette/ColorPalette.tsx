import { colors } from '../../styles/colors';
import styles from './ColorPalette.module.scss';

interface ColorSwatchProps {
  name: string;
  value: string;
  cssVar?: string;
  className?: string;
}

const ColorSwatch = ({ name, value, cssVar, className = '' }: ColorSwatchProps) => (
  <div className={`${styles.colorSwatch} ${className}`}>
    <div 
      className={styles.colorPreview} 
      style={{ backgroundColor: value }}
      title={`${name}: ${value}${cssVar ? ` (${cssVar})` : ''}`}
    />
    <div className={styles.colorInfo}>
      <span className={styles.colorName}>{name}</span>
      <span className={styles.colorValue}>{value}</span>
      {cssVar && <span className={styles.colorHex}>{cssVar}</span>}
    </div>
  </div>
);

interface ColorGroupProps {
  title: string;
  colors: Array<{ name: string; value: string; key: string; cssVar?: string }>;
}

const ColorGroup = ({ title, colors: colorList }: ColorGroupProps) => (
  <div className={styles.colorGroup}>
    <h3 className={styles.colorGroupTitle}>{title}</h3>
    <div className={styles.colorGrid}>
      {colorList.map(({ name, value, key, cssVar }) => (
        <ColorSwatch key={key} name={name} value={value} cssVar={cssVar} />
      ))}
    </div>
  </div>
);

export interface ColorPaletteProps {
  /** Show only specific color categories */
  categories?: string[];
}

export const ColorPalette = ({ categories }: ColorPaletteProps) => {
  // CSS Module color scales (from colors.module.scss)
  const primaryScale = {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  };

  const secondaryScale = {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  };

  const neutralScale = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  };

  const successScale = {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  };

  const warningScale = {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  };

  const errorScale = {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  };

  const infoScale = {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  };

  const colorGroups = [
    {
      title: 'Brand Colors',
      key: 'brand',
      colors: [
        { name: 'Primary', value: colors.primary, key: 'primary', cssVar: '--primary' },
        { name: 'Success', value: colors.success, key: 'success', cssVar: '--success' },
        { name: 'Warning', value: colors.warning, key: 'warning', cssVar: '--warning' },
        { name: 'Error', value: colors.error, key: 'error', cssVar: '--error' },
        { name: 'Info', value: colors.info, key: 'info', cssVar: '--info' },
      ]
    },
    {
      title: 'Gray Scale',
      key: 'gray',
      colors: Object.entries(colors.gray).map(([shade, value]) => ({
        name: `Gray ${shade}`,
        value,
        key: `gray-${shade}`,
      }))
    },
    {
      title: 'Text Colors',
      key: 'text',
      colors: [
        { name: 'Primary Text', value: colors.text.primary, key: 'text-primary', cssVar: '--text-primary' },
        { name: 'Secondary Text', value: colors.text.secondary, key: 'text-secondary', cssVar: '--text-secondary' },
        { name: 'Muted Text', value: colors.text.muted, key: 'text-muted', cssVar: '--text-tertiary' },
        { name: 'Inverse Text', value: colors.text.inverse, key: 'text-inverse', cssVar: '--text-inverse' },
      ]
    },
    {
      title: 'Background Colors',
      key: 'background',
      colors: [
        { name: 'Primary Background', value: colors.background.primary, key: 'bg-primary', cssVar: '--bg-primary' },
        { name: 'Secondary Background', value: colors.background.secondary, key: 'bg-secondary', cssVar: '--bg-secondary' },
        { name: 'Muted Background', value: colors.background.muted, key: 'bg-muted', cssVar: '--bg-tertiary' },
      ]
    },
    {
      title: 'Border Colors',
      key: 'border',
      colors: [
        { name: 'Default Border', value: colors.border.default, key: 'border-default', cssVar: '--border-primary' },
        { name: 'Muted Border', value: colors.border.muted, key: 'border-muted', cssVar: '--border-secondary' },
        { name: 'Focus Border', value: colors.border.focus, key: 'border-focus', cssVar: '--border-focus' },
      ]
    },
    {
      title: 'Base Colors',
      key: 'base',
      colors: [
        { name: 'White', value: colors.white, key: 'white', cssVar: '--white' },
        { name: 'Black', value: colors.black, key: 'black', cssVar: '--black' },
      ]
    },
    // CSS Module Color Scales
    {
      title: 'Primary Scale (CSS)',
      key: 'primary-scale',
      colors: Object.entries(primaryScale).map(([shade, value]) => ({
        name: `Primary ${shade}`,
        value,
        key: `primary-${shade}`,
        cssVar: `--primary-${shade}`,
      }))
    },
    {
      title: 'Secondary Scale (CSS)',
      key: 'secondary-scale',
      colors: Object.entries(secondaryScale).map(([shade, value]) => ({
        name: `Secondary ${shade}`,
        value,
        key: `secondary-${shade}`,
        cssVar: `--secondary-${shade}`,
      }))
    },
    {
      title: 'Neutral Scale (CSS)',
      key: 'neutral-scale',
      colors: Object.entries(neutralScale).map(([shade, value]) => ({
        name: `Neutral ${shade}`,
        value,
        key: `neutral-${shade}`,
        cssVar: `--neutral-${shade}`,
      }))
    },
    {
      title: 'Success Scale (CSS)',
      key: 'success-scale',
      colors: Object.entries(successScale).map(([shade, value]) => ({
        name: `Success ${shade}`,
        value,
        key: `success-${shade}`,
        cssVar: `--success-${shade}`,
      }))
    },
    {
      title: 'Warning Scale (CSS)',
      key: 'warning-scale',
      colors: Object.entries(warningScale).map(([shade, value]) => ({
        name: `Warning ${shade}`,
        value,
        key: `warning-${shade}`,
        cssVar: `--warning-${shade}`,
      }))
    },
    {
      title: 'Error Scale (CSS)',
      key: 'error-scale',
      colors: Object.entries(errorScale).map(([shade, value]) => ({
        name: `Error ${shade}`,
        value,
        key: `error-${shade}`,
        cssVar: `--error-${shade}`,
      }))
    },
    {
      title: 'Info Scale (CSS)',
      key: 'info-scale',
      colors: Object.entries(infoScale).map(([shade, value]) => ({
        name: `Info ${shade}`,
        value,
        key: `info-${shade}`,
        cssVar: `--info-${shade}`,
      }))
    },
  ];

  const filteredGroups = categories 
    ? colorGroups.filter(group => categories.includes(group.key))
    : colorGroups;

  return (
    <div className={styles.colorPalette}>
      <div className={styles.colorPaletteHeader}>
        <h2>Color Palette</h2>
        <p>Simplified color system focused on commonly used colors.</p>
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