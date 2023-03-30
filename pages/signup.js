import Image from 'next/image';
import FeesInfo from '../components/fees/fees-info/FeesInfo';
import TableMobile from '../components/table/TableMobile';
import TableDesktop from '../components/table/TableDesktop';
import HolyCrossFees from '../components/fees/holy-cross-fees/HolyCrossFees';
import OasisFees from '../components/fees/oasis-fees/OasisFees';
import FeesDescription from '../components/fees/fees-description/FeesDescription';
import Fees from '../components/fees/Fees';
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

      <div className="relative">
        <h2 className="xl:text-5xl text-3xl font-bold mb-12 text-center mt-24 md:mt-0">
          PŁATNOŚCI
        </h2>
        <Icon
          src="/icons/Flower.svg"
          size={{ width: 45, height: 45 }}
          position="-left-20 top-0"
          animate={true}
        />
      </div>

      <div className="w-full flex flex-wrap justify-center items-center">
        <Image
          className="grow b-8"
          src="/teacher-bro.svg"
          width={550}
          height={350}
          alt="School icon"
        />
        <a className="hidden" href="https://storyset.com/education">
          Education illustrations by Storyset
        </a>
        <Fees />
      </div>

      <FeesDescription />

      {/* component?? */}
      <div className="relative w-full h-12 xl:block hidden">
        <div className="absolute top-0 left-[225px]">
          <Image
            width={400}
            height={200}
            src="/background-left-buckle-long.svg"
            alt="line"
          />
        </div>
        <div className="absolute top-0 right-[225px]">
          <Image
            width={400}
            height={200}
            src="/background-right-buckle-long.svg"
            alt="line"
          />
        </div>
      </div>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center item-start mb-4">
        <OasisFees />
        <HolyCrossFees />
      </section>
      <section className="xl:px-8 text-lg text-center my-4">
        <p className="py-4">
          Opłaty za szkołę należy uiszczać na konto szkoły lub gotówką u
          Dyrekcji Szkoły.
        </p>
        <TableDesktop />
        <TableMobile />
        <br />
        <FeesInfo />
      </section>
    </Layout>
  );
}
