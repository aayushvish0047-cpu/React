import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { deletePaste } from "../redux/PasteSlice";

function ViewPaste() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isHydrated = useSelector((state) => state.paste.isHydrated);
  const paste = useSelector((state) =>
    state.paste.items.find((item) => item.id === id),
  );

  if (!isHydrated) {
    return (
      <main className="page-main">
        <p className="brutal-card loading-card" role="status">
          Loading paste...
        </p>
      </main>
    );
  }

  if (!paste) {
    return (
      <main className="page-main">
        <section className="empty-state brutal-card">
          <span className="empty-icon" aria-hidden="true">?</span>
          <h1>Paste not found.</h1>
          <p>It may have been deleted or the link may be incorrect.</p>
          <Link className="button button-primary" to="/paste">
            Back to pastes <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    );
  }

  function handleDelete() {
    dispatch(deletePaste(paste.id));
    navigate("/paste");
  }

  return (
    <main className="page-main">
      <Link className="back-link" to="/paste">
        <span aria-hidden="true">←</span> All pastes
      </Link>
      <article className="detail-card brutal-card">
        <header className="detail-header">
          <div>
            <p className="eyebrow">SAVED PASTE</p>
            <h1>{paste.title}</h1>
          </div>
          <span className="detail-stamp">PASTE<br />NO. {paste.id.slice(0, 4).toUpperCase()}</span>
        </header>
        <div className="detail-meta">
          <span>CREATED {new Date(paste.createdAt).toLocaleString()}</span>
          <span>UPDATED {new Date(paste.updatedAt).toLocaleString()}</span>
        </div>
        <pre className="paste-content">{paste.content}</pre>
        <footer className="detail-actions">
          <Link className="button button-primary" to={`/paste?edit=${encodeURIComponent(paste.id)}`}>
            Edit paste <span aria-hidden="true">↗</span>
          </Link>
          <button className="button button-danger" type="button" onClick={handleDelete}>
            Delete paste
          </button>
        </footer>
      </article>
    </main>
  );
}

export default ViewPaste;
