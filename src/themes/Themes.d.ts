export declare interface ArcThemeStore {
  /**
   * The version of this scheme
   */
  version: string;
  kind: 'ARC#ThemeInfo';
  /**
   * The list of installed themes.
   */
  themes: InstalledTheme[];
  /**
   * The `name` of the active theme. When not set a default one is loaded.
   */
  active?: string;
  /**
   * When set it ignores system preferences about the dark/light theme and will always
   * load default/set theme.
   */
  ignoreSystemPreference?: boolean;
}

export declare interface InstalledTheme {
  /**
   * The internal identifier used by the theme.
   */
  _id: string;
  /**
   * The title to render in the UI.
   * If not set the `name` is used.
   */
  title?: string;
  /**
   * Theme's name from the package.json file.
   */
  name: string;
  /**
   * Theme version.
   */
  version: string;
  /**
   * Theme directory in the themes location directory.
   */
  location: string;
  /**
   * The location to the theme main CSS file relative to the themes installation directory.
   */
  mainFile: string;
  /**
   * The description from the theme package.json.
   */
  description?: string;
  /**
   * Whether the theme comes pre-installed with ARC. These themes cannot be deleted through the application.
   */
  isDefault?: boolean;
  /**
   * ARC version that this theme will work with. When the version mismatch then a default theme is loaded.
   */
  engine?: string;
  /**
   * Set when the installed theme is a symlink.
   */
  isSymlink?: boolean;
  /**
   * The timestamp when the update was checked the last time.
   */
  updateCheck?: number;
}
