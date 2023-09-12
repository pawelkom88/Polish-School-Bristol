import Form from '@components/form/Form';
import Icon from '@components/icons/Icon';
import Layout from '@components/layout/Layout';
import Seo from '@components/seo/Seo';

const currentYear = new Date().getFullYear();

const signUpPageSeo = {
  canonical: 'https://polishschoolbristol.com/signup',
  url: 'https://polishschoolbristol.com/signup',
  title: 'Rekrutacja - jak zapisać dziecko do naszej szkoły ?',
  description: `Informacje o rekrutacji na rok ${currentYear} w polskiej szkoły w Bristolu.`,
};

export default function Signup() {
  return (
    <>
      <Seo seo={signUpPageSeo} />
      <Layout>
        <div className="flex justify-center items-center gap-4 mb-12">
          <h1 className="xl:text-5xl text-3xl font-bold">
            JAK ZAPISAĆ DZIECKO ?
          </h1>
          <div>
            <Icon
              size={{ width: 40, height: 40 }}
              position="relative hidden xl:block"
              src="/icons/Heart.svg"
            />
          </div>
        </div>
        <Form />
      </Layout>
    </>
  );
}
