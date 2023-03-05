import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Conteudo</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Seu nome</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="..">
            Cancelar
          </Link>
          <button>Postar</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function postMessage({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData.entries());
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
