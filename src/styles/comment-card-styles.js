const commentCardStyles = {
  commentCardWrapper: {
    margin: '16px 0px',
    padding: 16,
    boxShadow:
      'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
    borderRadius: 4,
  },
  userInformationWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
    marginBottom: 8,
  },
  avatarWrapper: { borderRadius: 36, width: 24 },
  actionWrapper: { display: 'flex', gap: 8 },
  actionButtonWrapper: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
};

export default commentCardStyles;
