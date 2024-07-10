import React from 'react'
import categoryImg01 from '../Assets/Image/category-01.png'
import categoryImg02 from '../Assets/Image/category-02.png'
import categoryImg03 from '../Assets/Image/category-03.png'
import categoryImg04 from '../Assets/Image/category-04.png'

const CategoryData = [
    {
        display:'Fastfood',
        imgUrl: categoryImg01
    },
    {
        display: 'Pizza',
        imgUrl: categoryImg02
    },
    {
        display: 'Asian Food',
        imgUrl: categoryImg03
    },
    {
        display: 'Row Meat',
        imgUrl: categoryImg04
    },
]

export default function Category() {
  return (
    <div className='container'>
        <div className='row'>
            
        {
            CategoryData.map((item,index) => {
                return (
                <div className='mb-4 col-lg-3 col-md-3 col-sm-3' key={index}>
                    <div className='category__item d-flex align-items-center gap-3 mt-2'>
                        <div className='category_img'>
                            <img src={item.imgUrl} alt={item.display}></img>
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                </div>
                )
            })
        }

        </div>
    </div>
  )
}
