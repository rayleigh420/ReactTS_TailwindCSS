import Tucmenhchihoang from '../assets/Tangthuvienvn/2.jpg'

const Tangthuvienvn = () => {
    return (
        <>
            <div className="bg-[#3D3E4A] px-[258px] py-[10px]">
                <span className="text-[15px] font-normal text-white">Trang chủ</span>
                <span className="text-[15px] text-[#BBBABB] ml-16">Tiên hiệp</span>
                <span className="text-[15px] text-[#BBBABB] ml-9">Huyền Huyễn</span>
                <span className="text-[15px] text-[#BBBABB] ml-9">Đô Thị</span>
                <span className="text-[15px] text-[#BBBABB] ml-9">Khoa Huyễn</span>
                <span className="text-[15px] text-[#BBBABB] ml-9">Kỳ Huyễn</span>
                <span className="text-[15px] text-[#BBBABB] ml-9">Võ Hiệp</span>
            </div>
            <div className="relative">
                <span className="absolute text-white text-sm left-[250px] top-4 bg-[#A89674] px-1 py-[2px] rounded-lg">Trang chu - Tiên Hiệp - Thanh Liên Chi Đỉnh</span>
                <img src="https://qidian.qpic.cn/qidian_common/349573/78fce8716a866511419f688546de7f67/0" />
            </div>
            <div className="flex flex-col top-[220px] absolute bg-white translate-x-[-50%] left-[50%] w-[1030px]">
                <div className="flex flex-row pl-[20px] pt-[20px]">
                    <div className="basis-3/4 flex flex-row pr-[30px]">
                        <div className="w-[144px]">
                            <img src={Tucmenhchihoang} />
                        </div>
                        <div className='grow ml-[18px] flex flex-col'>
                            <h1 className='font-bold text-[28px] leading-[38px] text-[#666666]'>Túc Mệnh Chi Hoàn (Số Mệnh Chi Hoàn) - 宿命之环</h1>
                            <div className='mt-[12px]'>
                                <span className='text-[#3f5a93] text-[12px] leading-[22px] border border-[#3f5a93] rounded-[15px] px-[10px] py-1 mr-[12px]'>Ái Tiềm Thủy đích Ô Tặc</span>
                                <span className='text-[#3f5a93] text-[12px] leading-[22px] border border-[#3f5a93] rounded-[15px] px-[10px] py-1 mr-[12px]'>Đang ra</span>
                                <span className='text-[#bf2c24] text-[12px] leading-[22px] border border-[#bf2c24] rounded-[15px] px-[10px] py-1'>Huyền Huyễn</span>
                            </div>
                            <p className='text-[#666666] font-[14px] leading-[20px] mt-[11px]'>Quỷ bí thế giới bộ 2. 1368 chi niên, tháng bảy chi mạt, thâm...</p>
                            <div className='mt-[12px]'>
                                <span className=' text-[#262626] text-[20px] tracking-[0.5px] leading-[22px] border-r border-r-[#e6e6e6] pr-[14px]'>127 <span className='text-[#666666] text-[12px] leading-[20px]'>Yêu thích</span></span>
                                <span className=' text-[#262626] text-[20px] tracking-[0.5px] leading-[22px] border-r border-r-[#e6e6e6] pr-[14px] pl-[14px]'>96571 <span className='text-[#666666] text-[12px] leading-[20px]'>Lượt xem</span></span>
                                <span className=' text-[#262626] text-[20px] tracking-[0.5px] leading-[22px] border-r border-r-[#e6e6e6] pr-[14px] pl-[14px]'>334 <span className='text-[#666666] text-[12px] leading-[20px]'>Theo dõi</span></span>
                                <span className=' text-[#262626] text-[20px] tracking-[0.5px] leading-[22px] border-r border-r-[#e6e6e6] pr-[14px] pl-[14px]'>442 <span className='text-[#666666] text-[12px] leading-[20px]'>Đề cử tháng này</span></span>
                            </div>
                            <div className="mt-[12px]">
                                <button className='border bg-[#A3261F] text-[#ffffff] font-[14px] leading-[34px] px-6'>Đọc truyện</button>
                                <button className='border bg-[#A3261F] text-[#ffffff] font-[14px] leading-[34px] px-6 ml-4'>Yêu thích</button>
                                <button className='border bg-[#A3261F] text-[#ffffff] font-[14px] leading-[34px] px-6 ml-4'>Theo dõi</button>
                                <button className=''>Đề cử</button>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Tangthuvienvn