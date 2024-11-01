export const ContactInputField = props => {
  return (
    <div
      className={`flex flex-col gap-y-6 py-16 ${props?.containerStyle ? props.containerStyle : ''}`}
    >
      <div className='grid grid-cols-12'>
        <h5
          className={`col-span-1 flex items-center text-[1rem] font-[600] text-gray-500 ${props?.numberStyle ? props.numberStyle : ''}`}
        >
          {props?.number}
        </h5>
        <label
          className={`col-span-11 text-[1.8rem] font-[450] text-white ${props?.titleStyle ? props.titleStyle : ''}`}
          htmlFor={props.id}
        >
          {props.title}
        </label>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-1'></div>
        <div className='col-span-11'>
          <input
            className={`w-full bg-transparent text-[1.8rem] font-[550] outline-none ${props?.inputStyle ? props.inputStyle : ''}`}
            type={props?.type || 'text'}
            id={props.id}
            name={props.name}
            required={props.required || false}
            placeholder={props?.placeholder || ''}
          />
        </div>
      </div>
    </div>
  );
};
