const detailPageStyles = {
  detailPageWrapper: {
    overflow: 'auto',
    paddingTop: 12,
    paddingBottom: 80,
  },
  backButtonWrapper: {
    backgroundColor: 'transparent',
    border: 'none',
    marginLeft: 12,
  },
  contentWrapper: {
    maxWidth: 500,
    width: '100%',
    padding: 32,
    margin: 'auto',
  },
  categoryWrapper: {
    padding: '4px 8px',
    borderRadius: 4,
    maxWidth: 100,
    width: 'max-content',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginBottom: 16,
    border: '2px solid black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  authorWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    margin: '16px 0px',
  },
  avatarWrapper: { borderRadius: 36, width: 24 },
  actionWrapper: { display: 'flex', gap: 8, margin: '16px 0px' },
  buttonActionWrapper: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  linkWrapper: { textDecoration: 'none' },
  contentEditableWrapper: {
    width: '100%',
    height: 150,
    border: '1px solid black',
    margin: '8px 0px',
    borderRadius: 4,
  },
  submitButtonWrapper: { padding: '4px 8px' },
  mt16: { marginTop: 16 },
};

export default detailPageStyles;
