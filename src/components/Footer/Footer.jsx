import footer from './../Footer/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div className={footer.footer__wrapper}>
        <h3 className={footer.footer__title}>
          Фильмы онлайн
        </h3>
      </div>
    </footer>
  )
}
