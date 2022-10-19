module.exports = {
    content: ["./*.html"],
  theme: {
    // fontSize LineHeight
    fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],  
      },
    extend: {
        // color theme
        colors: {
            'primary': '#ff02b7',
            'secondary': '#ff02b7',
            'success': '#ff02b7',
            'info': '#ff02b7',
            'warning': '#ff02b7',
            'light': '#ff02b7',
            'dark': '#ff02b7',

          },
        // z-Index  
          zIndex: {
            '99': '99',
            '999': '999',
            '9999': '9999',
          },
        //   Custom font
        //   fontFamily: {
        //     'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        //   },
    },
  },
  plugins: [],
};
