export const ContactDetails = () => {
  return (
    <div className='flex flex-col gap-y-10'>
      <div className='flex flex-col gap-y-4'>
        <h5 className='text-[0.8rem] font-[700] uppercase text-gray-500 '>
          Contact Details
        </h5>
        <ul className='links-wrap font[800] flex flex-col gap-y-2 text-[1.2rem] text-white'>
          <li className='btn btn-link btn-link-external'>
            <a
              href='mailto:deep2dipankar@gmail.com'
              className='btn-click magnetic'
              data-strength='20'
              data-strength-text='10'
              style={{ transform: 'rotate(0.001deg)' }}
            >
              <span
                className='btn-text'
                style={{ transform: 'rotate(0.001deg)' }}
              >
                <span className='btn-text-inner'>deep2dipankar@gmail.com</span>
              </span>
            </a>
          </li>
          <li className='btn btn-link btn-link-external'>
            <a
              href='tel:+918001860028'
              className='btn-click magnetic'
              data-strength='20'
              data-strength-text='10'
            >
              <span className='btn-text'>
                <span className='btn-text-inner'>+91 800 186 0028</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-y-4'>
        <h5 className='text-[0.8rem] font-[700] uppercase text-gray-500 '>
          Professional Details
        </h5>
        <ul className='links-wrap font[800] flex flex-col gap-y-2 text-[1.2rem] text-white'>
          <li>
            <p>Dipankar Majee</p>
          </li>
          <li>
            <p>Role: Full Stack Developer</p>
          </li>
          <li>
            <p>Industry: IT</p>
          </li>
          <li>
            <p>Location: Kolkata and Bangalore, India</p>
          </li>
        </ul>
      </div>
      <div className='hidden flex-col gap-y-4 xl:flex'>
        <h5 className='text-[0.8rem] font-[700] uppercase text-gray-500 '>
          Socials
        </h5>
        <ul className='links-wrap font[800] flex flex-col gap-y-2 text-[1.2rem] text-white'>
          <li className='btn btn-link btn-link-external'>
            <a
              href='https://www.linkedin.com/in/binarybrewer/'
              target='_blank'
              className='btn-click magnetic'
              data-strength='20'
              data-strength-text='10'
            >
              <span className='btn-text'>
                <span className='btn-text-inner'>LinkedIn</span>
              </span>
            </a>
          </li>

          <li className='btn btn-link btn-link-external'>
            <a
              href='https://github.com/dipankarmajee'
              target='_blank'
              className='btn-click magnetic'
              data-strength='20'
              data-strength-text='10'
            >
              <span className='btn-text'>
                <span className='btn-text-inner'>Git</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
