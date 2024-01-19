import Image from "next/image"

function Milestone() {
  return (
    <div>
        <Image
            src="https://i.ibb.co/q95CkZ8/6.png"
            width={200}
            height={200}
            sizes="100vw"
            className='rounded'
            alt=''
            id='background-jumbotron'
          />
          <div className='backdrop-opacity-0 backdrop-invert bg-black/20 absolute left-0 -mt-10 w-full h-full -z-10 bg-gradient-to-r from-white/5 to-black/20'>

          </div>
    </div>
  )
}

export default Milestone