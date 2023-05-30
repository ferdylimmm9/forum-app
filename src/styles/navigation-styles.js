const navigationStyles = {
  navigationWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 4,
    zIndex: 3,
    height: 70,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    boxShadow:
      'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
  },
  actionWrapper: {
    display: 'flex',
    maxWidth: 500,
    width: '100%',
    justifyContent: 'space-between',
  },
  menuWrapper: {
    border: 'none',
    outline: 'none',
    padding: 8,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
  },
};

export default navigationStyles;
