// 📭 Page de désinscription Loopivia - React + Tailwind
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const UnsubscribePage = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('pending');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const email = searchParams.get('email');

    if (email) {
      fetch(`https://script.google.com/macros/s/AKfycbywuHVzdrs9kM-SFPZFC7-lvenIfq8yQB0bt_HR7b9XKrjRDHuoPh1WApeXHOIGxOUr/exec?email=${email}`)
        .then(res => res.text())
        .then(data => {
          setStatus('done');
          setMessage(data);
        })
        .catch(err => {
          console.error(err);
          setStatus('error');
          setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
        });
    } else {
      setStatus('error');
      setMessage("Lien invalide ou email manquant.");
    }
  }, [searchParams]);

  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Désinscription</h1>
      {status === 'pending' && <p className="text-gray-300">Traitement de votre demande...</p>}
      {(status === 'done' || status === 'error') && (
        <div className="bg-white/10 p-6 rounded-md border border-white/20 max-w-md">
          <p>{message}</p>
        </div>
      )}
      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Retour à l'accueil
      </a>
    </section>
  );
};

export default UnsubscribePage;
