module.exports = {
  content: ["./**/**.tsx"],
  theme: {
    extend: {
      fontFamily:{
        'poppins-black':['Poppins-Black'],
        'poppins-400': ['Poppins-Regular'],
        'poppins-300': ['Poppins-Thin'],
        'poppins-600': ['Poppins-SemiBold'],
        'poppins-700': ['Poppins-Bold'],
      },
    },
    
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
