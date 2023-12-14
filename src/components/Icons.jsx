import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Icons() {
	return (
		<div className="flex gap-6 md:right-6 text-lg absolute bottom-10 pb-8 text-white">
			<a
				href="https://www.facebook.com/replayzor/"
				target="_blank"
				rel="noreferrer"
				aria-label="Facebook profile"
				className="p-4 hover:border-primary-softMagenta border-2 rounded-full cursor-pointer hover:bg-primary-blue hover:text-primary-softMagenta"
			>
				<FaFacebookF />
			</a>
			<a
				href="https://twitter.com/replayloll"
				target="_blank"
				rel="noreferrer"
				aria-label="Twitter profile"
				className="p-4 border-2 rounded-full cursor-pointer hover:border-primary-softMagenta hover:text-primary-softMagenta"
			>
				<FaTwitter />
			</a>
			<a
				href="https://www.instagram.com/replayzor/?hl=en"
				target="_blank"
				rel="noreferrer"
				aria-label="Instagram profile"
				className="p-4 border-2 hover:border-primary-softMagenta rounded-full cursor-pointer hover:text-primary-softMagenta"
			>
				<FaInstagram />
			</a>
		</div>
	);
}
export default Icons;
