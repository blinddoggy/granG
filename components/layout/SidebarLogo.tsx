import { useRouter } from 'next/router';
import Image from 'next/image';

const SidebarLogo = () => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push('/')}
			className="rounded-md mt-14 mb-4 flex items-center justify-center cursor-pointer transition">
			<Image
				src="/images/ElGranGeneral.png"
				alt="El Gran General"
				className=" w-full object-contain"
				width={300}
				height={300}
			/>
		</div>
	);
};

export default SidebarLogo;
