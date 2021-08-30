import NavbarImageProps from "../Interfaces/Navbar/NavbarImageProps";

const NavbarImageItem: React.FC<NavbarImageProps> = ({
  src,
  alt,
  className,
  imgClassName,
}: NavbarImageProps) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className={imgClassName} />
    </div>
  );
};

export default NavbarImageItem;
