declare namespace StyleCssModule {
  export interface IStyleCss {
    "header-container": string;
  }
}

declare const StyleCssModule: StyleCssModule.IStyleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleCssModule.IStyleCss;
};

export = StyleCssModule;
