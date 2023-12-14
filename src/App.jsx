// components
import Footer from "./components/Footer";
import Icons from "./components/Icons";

function App() {
	return (
		<main className=" bg-primary-violet flex flex-col items-center justify-center min-h-screen">
			<section className="bg-[url('/images/bg-mobile.svg')] md:flex-row md:bg-[url('/images/bg-desktop.svg')] md:bg-cover bg-contain bg-top  bg-no-repeat w-full h-[930px] flex flex-col items-center justify-center">
				<div className="relative bottom-24">
					<img
						src="/images/logo.svg"
						alt=""
						className="relative bottom-8 w-36 md:w-56"
					/>
					<img
						src="/images/illustration-mockups.svg"
						alt=""
						className="w-80 md:w-full md:relative md:top-36 md:right-auto"
					/>
				</div>
				<div className="flex w-[400px] md:w-[500px] md:items-start flex-col md:ml-10 items-center justify-center relative bottom-[10px]">
					<h1 className="text-[26px] font-poppins text-white">
						Build The Community
					</h1>
					<h2 className="text-[26px] font-poppins text-white">
						Your Fans Will Love
					</h2>
					<p className="text-center w-[76%] md:w-full md:text-left font-[100] opacity-80 text-white font-openSans mt-4 leading-[26px] text-[16px]">
						Huddle re-imagines the way we build communities. You have a voice,
						but so does your audience. Create connections with your users as you
						engage in genuine discussion.
					</p>
					<button
						type="button"
						className="w-[60%] md:w-[30%] hover:bg-primary-softMagenta hover:text-white rounded-full shadow-2xl text-primary-violet font-openSans py-3 mt-8 bg-white"
					>
						Register
					</button>
				</div>
				<Icons />
			</section>
			<Footer />
		</main>
	);
}

export default App;
