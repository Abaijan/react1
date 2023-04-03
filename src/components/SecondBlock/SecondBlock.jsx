import React from 'react'
import './secondBlock.css'

const SecondBlock = () => {
    return (
        <section className="SecondBlock">
            <div className="container">
                <nav className="SecondBlock-inner">

                    <div className="SecondBlock-cart">
                        <div className="icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.903 2.34375C32.0495 2.34375 31.2494 2.57414 30.5593 2.97437V1.17188C30.5593 0.524687 30.0346 0 29.3874 0H10.6374C9.99016 0 9.46547 0.524687 9.46547 1.17188V2.98867C8.76992 2.57953 7.96063 2.34375 7.09695 2.34375C4.51227 2.34375 2.40945 4.44656 2.40945 7.03125C2.40945 9.00273 2.99367 10.9077 4.09891 12.5402C5.98047 15.3193 8.3007 16.0405 10.2206 16.8084C11.3277 19.5653 13.5663 21.7502 16.3589 22.7846L15.4948 28.2812H15.3249C13.3864 28.2812 11.8093 29.8584 11.8093 31.7969V37.6562H10.6374C9.99023 37.6562 9.46555 38.1809 9.46555 38.8281C9.46555 39.4753 9.99023 40 10.6374 40H29.3874C30.0346 40 30.5593 39.4753 30.5593 38.8281C30.5593 38.1809 30.0346 37.6562 29.3874 37.6562H28.2155V31.7969C28.2155 29.8584 26.6384 28.2812 24.6999 28.2812H24.5301L23.666 22.7847C26.4627 21.7487 28.7038 19.5591 29.8092 16.7966C31.6229 16.0711 34.0003 15.3478 35.9012 12.5402C37.0064 10.9077 37.5906 9.00266 37.5906 7.03125C37.5905 4.44656 35.4877 2.34375 32.903 2.34375ZM9.4568 13.9787C6.59945 12.8357 4.7532 10.1087 4.7532 7.03125C4.7532 5.73891 5.80461 4.6875 7.09695 4.6875C8.3893 4.6875 9.4407 5.73891 9.4407 7.03125C9.4407 7.11367 9.44938 7.19398 9.46555 7.27156V12.8906C9.46555 13.2673 9.48578 13.6392 9.52453 14.0058L9.4568 13.9787ZM25.8718 37.6562H14.153V35.3125H25.8718V37.6562ZM24.6999 30.625C25.3461 30.625 25.8718 31.1507 25.8718 31.7969V32.9688H14.153V31.7969C14.153 31.1507 14.6788 30.625 15.3249 30.625C15.9607 30.625 23.2089 30.625 24.6999 30.625ZM17.8673 28.2812L18.6427 23.3487C19.0912 23.4071 19.5483 23.4375 20.0124 23.4375C20.4766 23.4375 20.9337 23.407 21.3821 23.3487L22.1576 28.2812H17.8673ZM28.2155 12.8906C28.2155 17.4138 24.5356 21.0938 20.0124 21.0938C15.4892 21.0938 11.8093 17.4138 11.8093 12.8906V7.03125H28.2155V12.8906ZM28.2155 4.6875H11.8093V2.34375H28.2155V4.6875ZM30.5431 13.9787L30.5015 13.9953C30.5395 13.6322 30.5592 13.2637 30.5592 12.8906V7.03125C30.5593 5.73891 31.6107 4.6875 32.903 4.6875C34.1954 4.6875 35.2468 5.73891 35.2468 7.03125C35.2468 10.1087 33.4005 12.8358 30.5431 13.9787Z" fill="#3A3A3A" />
                        </svg>
                        </div>
                        <div className="icon-info">
                        <h1 className="SecondBlock-cart-text">High Quality</h1>
                        <p className="SecondBlock-cart-p">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="SecondBlock-cart">
                        <div className="icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_27_489)">
                                <path d="M37.8573 14.1741C37.3295 12.5397 37.5545 10.0864 36.1827 8.19207C34.8 6.28286 32.3952 5.7402 31.0373 4.74707C29.6938 3.76442 28.4438 1.62606 26.1837 0.888559C23.9873 0.17184 21.7414 1.14442 20 1.14442C18.2588 1.14442 16.013 0.171606 13.8163 0.888481C11.5566 1.62582 10.3056 3.76465 8.96289 4.74684C7.60648 5.73879 5.19992 6.28293 3.8175 8.19184C2.4468 10.0846 2.66953 12.5436 2.14266 14.174C1.64125 15.7258 0 17.5882 0 20.0001C0 22.4135 1.63938 24.2687 2.14266 25.8261C2.67047 27.4605 2.44547 29.9139 3.81734 31.8082C5.19992 33.7175 7.60461 34.26 8.96266 35.2532C10.306 36.2357 11.5562 38.3743 13.8163 39.1117C16.0112 39.8279 18.2606 38.8558 20 38.8558C21.737 38.8558 23.9916 39.8269 26.1837 39.1118C28.4434 38.3744 29.6937 36.2361 31.0371 35.2534C32.3935 34.2614 34.8001 33.7173 36.1825 31.8084C37.5533 29.9156 37.3304 27.4568 37.8573 25.8262C38.3587 24.2743 40 22.4119 40 20.0001C40 17.5869 38.361 15.7322 37.8573 14.1741ZM34.8838 24.8653C34.2686 26.7696 34.4298 28.9007 33.6516 29.9753C32.863 31.0641 30.7913 31.5614 29.1926 32.7308C27.6114 33.8871 26.5032 35.7202 25.2143 36.1407C23.9949 36.5387 22.0077 35.7307 20.0001 35.7307C17.9777 35.7307 16.011 36.5404 14.7858 36.1407C13.497 35.7202 12.3904 33.8884 10.8075 32.7307C9.21828 31.5685 7.13469 31.0609 6.34836 29.9751C5.57273 28.9042 5.72781 26.7582 5.11633 24.8654C4.51695 23.0107 3.125 21.4049 3.125 20.0001C3.125 18.594 4.5157 16.9936 5.11617 15.135C5.73141 13.2307 5.57023 11.0994 6.34836 10.025C7.13648 8.93684 9.20984 8.43786 10.8075 7.26942C12.3937 6.10934 13.4949 4.28067 14.7856 3.8595C16.004 3.462 17.9977 4.26957 19.9999 4.26957C22.0259 4.26957 23.9877 3.45926 25.2142 3.8595C26.5028 4.27997 27.6104 6.11247 29.1926 7.2695C30.7816 8.43176 32.8653 8.93934 33.6516 10.025C34.4274 11.0962 34.2715 13.24 34.8837 15.1348V15.1349C35.483 16.9895 36.875 18.5954 36.875 20.0001C36.875 21.4063 35.4843 23.0066 34.8838 24.8653ZM27.1987 14.9849C27.8089 15.5951 27.8089 16.5844 27.1987 17.1946L19.3779 25.0154C18.7677 25.6256 17.7783 25.6255 17.1681 25.0154L12.8014 20.6486C12.1912 20.0384 12.1911 19.0491 12.8013 18.4389C13.4116 17.8288 14.401 17.8287 15.011 18.4389L18.273 21.7008L24.9888 14.985C25.5991 14.3747 26.5884 14.3747 27.1987 14.9849Z" fill="#3A3A3A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_27_489">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <div className="icon-info">
                        <h1 className="SecondBlock-cart-text">Warrany Protection</h1>
                        <p className="SecondBlock-cart-p">Over 2 years</p>
                        </div>
                    </div>
                    <div className="SecondBlock-cart">
                        <div className="icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_27_487)">
                                <path d="M36.8986 20.7346V2.5198C36.8986 1.86997 36.3718 1.34314 35.722 1.34314H4.19674C3.54691 1.34314 3.02008 1.86997 3.02008 2.5198V22.1867C2.45246 22.2694 1.89755 22.4898 1.40664 22.8542C-0.140899 23.9516 -0.506918 26.4073 0.789368 27.9218L6.08928 34.347C9.36996 38.1866 12.855 38.657 18.0359 38.657C22.4819 38.657 24.4696 38.6766 28.3443 37.7937L32.1173 36.8913C32.7291 37.7456 33.7003 38.299 34.7922 38.299H36.6508C38.4975 38.299 40 36.7163 40 34.7708V24.2523C40.0001 22.3947 38.63 20.8688 36.8986 20.7346ZM31.6098 23.1551L30.042 22.3588C27.4642 21.0577 24.4839 21.0095 21.8655 22.2269C21.1511 22.5079 19.5929 23.4506 18.7847 23.4191H13.3445C11.54 23.4191 10.0718 24.8872 10.0718 26.6918V27.5499C10.0617 27.5392 10.0511 27.5291 10.0411 27.5182L6.15619 23.3013C5.9211 23.0462 5.65697 22.8326 5.37348 22.6613V10.9874H15.0027V15.3007C15.0027 15.9505 15.5295 16.4773 16.1794 16.4773H23.6042C24.254 16.4773 24.7808 15.9505 24.7808 15.3007V10.9874H34.5454V20.7346C33.1706 20.8408 32.0242 21.8243 31.6098 23.1551ZM17.356 10.9874H22.4274V14.124H17.356V10.9874ZM34.5453 8.63404H24.7808V3.69646H34.5454V8.63404H34.5453ZM22.4275 3.69646V8.63412H17.356V3.69646H22.4275ZM15.0026 3.69646V8.63412H5.3734V3.69646H15.0026ZM27.7982 35.5046C24.2188 36.3244 22.0631 36.2912 18.0781 36.2912C13.2146 36.2912 10.8646 36.2126 7.90479 32.8494L2.60488 26.4243C1.683 25.2238 3.35276 23.8067 4.4254 24.8957L8.31034 29.1127C9.3371 30.1961 10.6291 30.7923 12.2216 30.8274H22.9926C23.6425 30.8274 24.1693 30.3006 24.1693 29.6507C24.1693 29.0009 23.6425 28.4741 22.9926 28.4741H12.425V26.6916C12.425 26.1847 12.8374 25.7722 13.3444 25.7722H18.7847C20.0103 25.86 21.7793 24.8366 22.8575 24.3607C24.8186 23.4489 27.0508 23.485 28.9789 24.4581L31.4432 25.7098V34.6326L27.7982 35.5046ZM37.6467 34.7707C37.6467 35.4186 37.2 35.9456 36.6509 35.9456H34.7922C34.2431 35.9456 33.7965 35.4186 33.7965 34.7707V24.2523C33.7965 23.6044 34.2432 23.0773 34.7922 23.0773H36.6509C37.2 23.0773 37.6467 23.6044 37.6467 24.2523V34.7707Z" fill="#3A3A3A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_27_487">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <div className="icon-info">                       
                         <h1 className="SecondBlock-cart-text">Free Shipping</h1>
                        <p className="SecondBlock-cart-p">Order over 150 $</p>
                        </div>

                    </div>
                    <div className="SecondBlock-cart">
                        <div className="icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_27_492)">
                                <path d="M36.4624 15.9752C36.1995 7.12165 28.9161 0 20 0C11.0838 0 3.80043 7.12165 3.53745 15.9752L2.35291 17.1598V25.1932L3.52938 26.3696V31.8431C3.52938 35.0435 6.13298 37.6471 9.3333 37.6471H10.7906C11.2762 39.0164 12.5839 40 14.1176 40H16.4706C18.0053 40 19.3137 39.015 19.7986 37.6442C19.8658 37.6454 19.9331 37.6471 20 37.6471C25.6814 37.6471 30.4351 33.5987 31.5281 28.2353H34.6049L37.647 25.1932V17.1598L36.4624 15.9752ZM20 2.35294C26.9828 2.35294 32.7969 7.44933 33.9204 14.1176H31.5281C30.4351 8.7542 25.6814 4.70588 20 4.70588C14.3186 4.70588 9.56483 8.7542 8.47181 14.1176H6.07949C7.20302 7.44933 13.0171 2.35294 20 2.35294ZM29.1139 14.1176C25.3109 14.1063 22.6246 14.3379 20.4098 11.1004L19.3344 9.52839L18.4102 11.1938C17.0635 13.6204 15.2499 14.1176 12.9411 14.1176H10.886C11.9335 10.0629 15.6225 7.05882 20 7.05882C24.3775 7.05882 28.0665 10.0629 29.1139 14.1176ZM8.23526 25.8824H6.36961L4.70585 24.2186V18.1344L6.36961 16.4706H8.23526V25.8824ZM5.88232 31.8431V28.2353H8.46953C8.91244 30.4294 9.97212 32.4435 11.542 34.0611C11.2129 34.4127 10.9548 34.8311 10.7906 35.2941H9.3333C7.4304 35.2941 5.88232 33.746 5.88232 31.8431ZM16.4706 37.6471H14.1176C13.4688 37.6471 12.9411 37.1194 12.9411 36.4706C12.9411 35.8219 13.4688 35.2941 14.1176 35.2941H16.4706C17.1193 35.2941 17.647 35.8219 17.647 36.4706C17.647 37.1194 17.1193 37.6471 16.4706 37.6471ZM29.4117 25.8824C29.4117 31.072 25.1896 35.2941 20 35.2941C19.9325 35.2941 19.8645 35.2928 19.7966 35.2912C19.3102 33.9234 18.0032 32.9412 16.4706 32.9412C14.0549 32.9465 14.0934 32.9291 13.7923 32.9568C11.7498 31.1665 10.5882 28.6166 10.5882 25.8824V16.4706H12.9411C15.0233 16.4706 17.5589 16.1273 19.5218 13.7384C22.1116 16.4524 25.2764 16.4706 28.1175 16.4706H29.4117V25.8824ZM35.2941 24.2186L33.6303 25.8824H31.7647V16.4706H33.6303L35.2941 18.1344V24.2186Z" fill="#3A3A3A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_27_492">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <div className="icon-info">
                        <h1 className="SecondBlock-cart-text">24 / 7 Support</h1>
                        <p className="SecondBlock-cart-p">Dedicated support</p>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default SecondBlock