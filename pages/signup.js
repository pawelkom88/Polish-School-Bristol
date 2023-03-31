import Form from '../components/form/Form';
import Icon from '../components/icons/Icon';
import Layout from '../components/layout/Layout';

export default function Signup() {
  return (
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
  );
}
