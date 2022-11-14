
import { useEffect, useState } from 'react'
import { GrDocumentDownload } from 'react-icons/gr'
import { useParams } from 'react-router-dom'
import img1 from '../../../images/image4.png'
import img2 from '../../../images/image5.png'
import img3 from '../../../images/image6.png'
import { Axios } from '../../Axios'

function ProdDecr() {

	const {id} = useParams()
	const [product, setProduct] = useState()

	useEffect(() => {

		const getdata = async()=>{

			const {data} = await Axios.get(`/product/${id}`)
			setProduct(data.product)
            console.log(data);
		}
		getdata()
	}, [])
	
	return (
		<>
			<div className="h-full w-10/12 ">

				<div className="px-20 py-14 mt-10">

					{/* Path */}
					<p className="text-[#1672DE] mb-4">
						products &gt; { product && product.name}
					</p>

					{/* Chemical Name */}
					<div className="flex">
						<div className="w-20 h-20 bg-black mr-5">
						</div>

						<div className="flex align-middle justify-center"><h1 className="my-auto text-2xl font-bold">{product && product.name ? product.name : '-' }</h1></div>
					</div>

					{/* Technical Description */}
					<div className='mt-10'>
						<div className="flex">
							<div className="py-3 px-4 rounded prod_bag  w-1/4">
								<p className="font-xs">Substance</p>
								<h3 className="font-xl">{product && product.name ? product.name : '-' }</h3>
							</div>
							<div className="py-3 mx-6 px-4 rounded prod_bag w-1/10">
								<p className="font-xs">CAS</p>
								<h3 className="font-xl">{product && product['CASNo'] ? product['CASNo'] : '-' }</h3>
							</div>
							<div className="py-3 px-4 rounded  prod_bag w-1/10">
								<p className="font-xs">EC Number</p>
								<h3 className="font-xl">Name</h3>
							</div>
						</div>
						<div className="flex mt-6">
							<div className="py-3 px-4 prod_bag rounded w-1/4">
								<p className="font-xs">Synonyms </p>
								<h3 className="font-xl">{product && product.Synonyms ? product.Synonyms : "-"}</h3>
							</div>
							<div className="py-3 mx-6 px-4 h-fit rounded prod_bag w-1/10">
								<p className="font-xs">Color</p>
								<h3 className="font-xl text-center">{product && product.color ? product.color : '-'}</h3>
							</div>
							<div className="py-3 px-4 h-fit rounded prod_bag w-1/10">
								<p className="font-xs">Appearance</p>
								<h3 className="font-xl">{product && product.Appearance
 ? product.Appearance : '-' }</h3>
							</div>
						</div>
					</div>

					{/* Documents */}
					<div className='mt-10'>
						<p className='font-semibold text-lg'>Documents</p>
						<div className="flex flex-wrap">
							<div className="flex items-center  mt-4 mr-3 w-1/5 p-2 border rounded-md border-[#1E94DD]">
								<div className="w-1/3 flex justify-center align-middle">
									<GrDocumentDownload size={30} />
								</div>
								<div className="flex flex-col">
									<div className="w-1/2">abc.pdf</div>
									<div className="text-xs text-gray-600">24 Mb</div>
								</div>
							</div>
							<div className="flex items-center mt-4 mr-3 w-1/5 p-2 border rounded-md border-[#1E94DD]">
								<div className="w-1/3 flex justify-center align-middle">
									<GrDocumentDownload size={30} />
								</div>
								<div className="flex flex-col">
									<div className="w-1/2">abc.pdf</div>
									<div className="text-xs text-gray-600">24 Mb</div>
								</div>
							</div>
							<div className="flex items-center mt-4 mr-3 w-1/5 p-2 border rounded-md border-[#1E94DD]">
								<div className="w-1/3 flex justify-center align-middle">
									<GrDocumentDownload size={30} />
								</div>
								<div className="flex flex-col">
									<div className="w-1/2">abc.pdf</div>
									<div className="text-xs text-gray-600">24 Mb</div>
								</div>
							</div>
							<div className="flex items-center mt-4 mr-3 w-1/5 p-2 border rounded-md border-[#1E94DD]">
								<div className="w-1/3 flex justify-center align-middle">
									<GrDocumentDownload size={30} />
								</div>
								<div className="flex flex-col">
									<div className="w-1/2">abc.pdf</div>
									<div className="text-xs text-gray-600">24 Mb</div>
								</div>
							</div>
						</div>
					</div>

					{/* Product Description */}
					<div className="mt-12 text-sm">
						<h1 className="font-semibold text-xl">Product Description</h1>
						<p className="mt-2">Micronized titanium dioxide rutile via sulfate.</p>
						<p className="my-2 ">Key Features:</p>
						<ul className='list-disc px-2 list-inside space-y-1'>
							<li>{product && 'density :' +  product.Density}</li>
							<li>{product && 'Boiling Point :' +  product['Boiling Point']}</li>
							<li>{product && 'Melting Point :' +  product['Melting Point']}</li>
							<li>{product && 'Molecular Weight :' +  product['Molecular Weight']}</li>
							<li>{product && 'Molecular Weight :' +  product['Molecular Weight']}</li>
							<li>{product && 'Formula :' +  product.Formula}</li>
							
						</ul>
					</div>

					{/* Suppliers */}
					<div className="mt-12">
						<h1 className="font-semibold text-xl">Our Trusted Suppliers</h1>
						<div className="flex flex-wrap mt-2">
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img2} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img3} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img2} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img3} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>

                            <div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img2} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img3} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProdDecr;
