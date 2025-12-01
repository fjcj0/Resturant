import type { IconType } from 'react-icons';

const CardHome = ({ bgIconColor, textIconColor, Icon, title, value }: {
    Icon: IconType,
    title: string,
    value: number,
    textIconColor: string,
    bgIconColor: string
}) => {
    return (
        <div className="w-full h-[7rem]  p-3 border-[0.7px] rounded-xl border-gray-500 flex items-center justify-between gap-5">
            <div
                className="w-8 h-8 flex items-center justify-center rounded-md border flex-shrink-0"
                style={{
                    backgroundColor: bgIconColor,
                    borderColor: textIconColor
                }}>
                <Icon
                    style={{ color: textIconColor }}
                    className="w-4 h-4"
                />
            </div>
            <div className='flex flex-col items-start justify-start gap-1'>
                <h3 className='font-bold text-sm md:text-lg'>{title}</h3>
                <h3 className='font-medium text-xl'>{value}</h3>
            </div>
        </div>
    );
}

export default CardHome;