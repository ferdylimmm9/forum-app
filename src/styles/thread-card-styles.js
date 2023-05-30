const threadCardStyles = {
  cardWrapper: {
    boxShadow:
      'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
    maxWidth: 500,
    padding: 32,
    borderRadius: 8,
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
  linkWrapper: { textDecoration: 'none' },
  separatorWrapper: { margin: '16px 0px' },
  actionWrapper: { display: 'flex', gap: 8 },
  buttonWrapper: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  chatWrapper: {
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
};
export default threadCardStyles;
