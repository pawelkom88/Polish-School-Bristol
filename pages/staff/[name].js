import Layout from '@components/layout/Layout';
import StaffCard from '@components/staff/staff-card/StaffCard';
import { staffBedminister, staffOasis } from '@data/data';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function School() {
  const router = useRouter();

  const staff = router.query.name === 'Oasis' ? staffOasis : staffBedminister;

  return (
    <Layout>
      <div className="flex justify-center items-center gap-4 mb-4 lg:mb-24">
        <h1 className="xl:text-5xl text-3xl font-bold text-center md:mt-0">
          kadra
        </h1>
        <Image
          className="hidden lg:block animate-spin-slow"
          src="/icons/Flower.svg"
          width={45}
          height={45}
          alt="icon"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center item-start gap-4 xl:gap-8">
        {staff.map((teacher) => {
          return <StaffCard key={teacher.id} teacherInfo={teacher} />;
        })}
      </div>
    </Layout>
  );
}
