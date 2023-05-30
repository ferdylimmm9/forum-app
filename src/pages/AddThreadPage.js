import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage() {
  const [title, handleTitle] = useInput('');
  const [category, handleCategory] = useInput('');
  const [content, setContent] = React.useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      dispatch(asyncAddThread({ body: content, title, category }));
      navigate(-1);
    },
    [category, content, dispatch, navigate, title]
  );

  return (
    <div style={{ overflow: 'auto', paddingTop: 12, paddingBottom: 80 }}>
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        Tambah Thread
      </h2>

      <form onSubmit={onSubmit}>
        <div
          style={{
            display: 'flex',
            gap: 16,
            flexDirection: 'column',
            maxWidth: 512,
            width: '100%',
            margin: '24px auto',
          }}
        >
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="Judul"
            style={{
              padding: 8,
              borderWidth: 1,
              borderRadius: 2,
            }}
          />
          <input
            type="text"
            value={category}
            onChange={handleCategory}
            placeholder="Kategori"
            style={{
              padding: 8,
              borderWidth: 1,
              borderRadius: 2,
            }}
          />
          <div
            className="content-editable"
            contentEditable
            placeholder="Masukkan Konten"
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
            {...(content === ''
              ? { dangerouslySetInnerHTML: { __html: content } }
              : {})}
          />
          <button
            style={{
              padding: 8,
              borderWidth: 1,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              cursor: 'pointer',
            }}
            type="submit"
          >
            Buat
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddThreadPage;
