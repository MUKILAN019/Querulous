import logo from "../assets/querulous.png";
export default function HomePage(){
    return(
        <>
          <div class="bg-orange-600 text-white">
    <div class="container mx-auto px-4">
        <nav class="flex justify-between items-center py-4">
            <div class="flex justify-start">
                <a href="#" class="text-lg font-semibold w-[23%]"><img src={logo} alt="" /></a>
            </div>
            <div class="flex justify-end">
                <a href="#" class="px-4">Home</a>
                <a href="#" class="px-4">Search</a>
                <a href="#" class="px-4">Services</a>
                <a href="#" class="px-4">Profile</a>
            </div>
        </nav>
    </div>
</div>

        </>
    )
}