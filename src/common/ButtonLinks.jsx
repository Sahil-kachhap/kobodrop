function ButtonLinks({children, className, href, target}) {
  return (
    <a href={href} children={children} className={className} target={target}></a>
  )
}

export default ButtonLinks