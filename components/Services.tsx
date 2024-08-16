import { cn } from "@/lib/utils";

export default function Services() {

  return (
    <div className="bg-black text-white px-4 py-16">
        <h1 className="text-xl font-semibold text-center p-4 tracking-wider">Transformative Solutions for Your Digital Needs</h1>

        <div className="grid grid-cols-12 gap-4 md:p-8 place-items-center">

            <div
                className={cn(
                "col-span-12 lg:col-span-4 w-full cursor-pointer overflow-hidden relative h-96 rounded-xl shadow-xl mx-auto justify-end p-4 border border-transparent",
                "bg-[url(/images/freelance.jpg)] bg-cover",
                // Preload hover image by setting it in a pseudo-element
                // "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                "transition-all duration-500"
                )}
            >
                <div className="relative z-50">
                <h1 className="font-bold text-xl md:text-xl text-gray-50 relative">
                    Freelance
                </h1>
                <p className="text-base text-gray-50 relative my-2">
                    Looking for reliable and skilled coding support for your project? Hire me for your freelance coding needs
                </p>
                <ul className="text-sm flex flex-col gap-2">
                    <li>API</li>
                    <li>Authentication</li>
                    <li>Messaging</li>
                    <li>GUI</li>
                    <li>Web based</li>
                </ul>
                </div>
            </div>

            <div
                className={cn(
                "col-span-12 lg:col-span-4 w-full cursor-pointer overflow-hidden relative h-96 rounded-xl shadow-xl mx-auto justify-end p-4 border border-transparent",
                "bg-[url(/images/hire.jpg)] bg-cover bg-center",
                // Preload hover image by setting it in a pseudo-element
                // "before:bg-[url((https://media.giphy.com/media/AwoDg0wJImOjK/giphy.gif?cid=790b76113n2u6vby3f4ym02x1vrhuoyrp1n8j6pzd9iavrg5&ep=v1_gifs_search&rid=giphy.gif&ct=g)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                "hover:bg-[url(https://media.giphy.com/media/AwoDg0wJImOjK/giphy.gif?cid=790b76113n2u6vby3f4ym02x1vrhuoyrp1n8j6pzd9iavrg5&ep=v1_gifs_search&rid=giphy.gif&ct=g)]",
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                "transition-all duration-500"
                )}
            >
                <div className="relative z-50">
                <h1 className="font-bold text-xl md:text-xl text-gray-50 relative">
                    Hire me
                </h1>
                <p className="text-base text-gray-50 relative my-2">
                    Need a reliable coder for your project? Hire me to get the job done right
                </p>
                <ul className="text-sm flex flex-col gap-2">
                    <li>Frontend</li>
                    <li>Backend</li>
                    <li>Full Stack</li>
                </ul>
                </div>
            </div>

            <div
                className={cn(
                "col-span-12 lg:col-span-4 w-full cursor-pointer overflow-hidden relative h-96 rounded-xl shadow-xl mx-auto justify-end p-4 border border-transparent",
                "bg-[url(/images/commission.jpg)] bg-cover bg-center",
                // Preload hover image by setting it in a pseudo-element
                // "before:bg-[url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2hsam1pcHJ1ODYyaG43bDh3NjVpanppNW5ocGxkbnVqM2pzZjd5byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l44QgV6RFRGgjDsDC/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                "hover:bg-[url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2hsam1pcHJ1ODYyaG43bDh3NjVpanppNW5ocGxkbnVqM2pzZjd5byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l44QgV6RFRGgjDsDC/giphy.gif)] hover:bg-center",
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                "transition-all duration-500"
                )}
            >
                <div className="relative z-50">
                <h1 className="font-bold text-xl md:text-xl text-gray-50 relative">
                    Commission
                </h1>
                <p className="text-base text-gray-50 relative my-2">
                    Looking for someone to tackle your project? Hire me for your project commission and let’s make it happen
                </p>
                <ul className="text-sm flex flex-col gap-2">
                    <li>Web Project</li>
                    <li>Capstone</li>
                    <li>Programming Project</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  );
}
