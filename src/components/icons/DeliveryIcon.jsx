const SvgComponent = ({ isPickup, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    viewBox='0 0 24 24'
    fill='none'
    {...rest}
  >
    <path
      fill={isPickup ? '#000' : '#0FA958'}
      d='M19 15c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Zm-9-7H5v2h5V6Zm7-1h-3v2h3v2.65L13.5 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.5l4.5-5.65V7a2 2 0 0 0-2-2ZM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1Z'
    />
  </svg>
);
export { SvgComponent as DeliveryIcon };
