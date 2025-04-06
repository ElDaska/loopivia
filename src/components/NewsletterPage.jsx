// === 4. NewsletterPage.jsx ===
import { NewsletterHero } from './NewsletterHero';
import { NewsletterForm } from './NewsletterForm';
import { NewsletterDisclaimer } from './NewsletterDisclaimer';

const NewsletterPage = () => {
  return (
    <main className="bg-[#0f172a] min-h-screen">
      <NewsletterHero />
      <NewsletterForm />
      <NewsletterDisclaimer />
    </main>
  );
};

export default NewsletterPage;