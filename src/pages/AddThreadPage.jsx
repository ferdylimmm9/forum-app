import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';
import addThreadPageStyles from '../styles/add-thread-page.styles';

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
    <div style={addThreadPageStyles.threadWrapper}>
      <h2 style={addThreadPageStyles.textCenter}>Tambah Thread</h2>

      <form onSubmit={onSubmit}>
        <div style={addThreadPageStyles.contentWrapper}>
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="judul"
            style={addThreadPageStyles.inputWrapper}
          />
          <input
            type="text"
            value={category}
            onChange={handleCategory}
            placeholder="kategori"
            style={addThreadPageStyles.inputWrapper}
          />
          <div
            className="content-editable"
            contentEditable
            placeholder="konten"
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
            {...(content === ''
              ? { dangerouslySetInnerHTML: { __html: content } }
              : {})}
          />
          <button style={addThreadPageStyles.submitButtonWrapper} type="submit">
            Buat
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddThreadPage;
