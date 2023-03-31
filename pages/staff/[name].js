import StaffCard from '../../components/staff/staff-card/StaffCard';
import Layout from '../../components/layout/Layout';
import Icon from '../../components/icons/Icon';
import Image from 'next/image';

export default function school() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center item-start gap-4 xl:gap-8 mb-12">
        <h1 className="xl:text-5xl text-3xl font-bold text-center mt-24 md:mt-0">
          kadra
        </h1>
        <Image
          className="animate-spin-slow"
          src="/icons/Flower.svg"
          width={45}
          height={45}
          alt="icon"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <StaffCard />
        <StaffCard />
        <StaffCard />
        <StaffCard />
        <StaffCard />
      </div>
    </Layout>
  );
}
