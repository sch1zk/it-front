import '../../styles/question.css';

export default function HeroSection() {
    return (
        <section className="hero-question">
            <div className="container-question">
                <div className="section-title-question">
                    <form>
                        <div className='text_ivent'>
                            <h1 className='text-h1-question'>Есть вопрос?</h1>
                            <div>
                                <p>Свяжись с нашей командой <br></br> с помощью этой формы</p>
                            </div>
                        </div>
                        <div className="radio-group">
                            <input type="radio" id="question" name="type" value="question" defaultChecked />
                            <label htmlFor="question">Вопрос</label>
                            <input type="radio" id="suggestion" name="type" value="suggestion" />
                            <label htmlFor="suggestion">Предложение</label>
                        </div>
                        <p className="none">Имя</p>
                        <input type="text" id="name" name="name" placeholder="Имя" required />
                        <p className="none">Электронная почта</p>
                        <input type="email" id="email" name="email" placeholder="Электронная почта" required />
                        <p className="none">Сообщение*</p>
                        <textarea id="message" name="message" placeholder="Сообщение" required></textarea>
                        <button className='href-button' type="submit">Отправить сообщение</button>
                    </form>
                    <div className='section-question-image'>
                        <img src="/images/imgre.svg" alt="Мегафон" /> 
                    </div>        
                </div>
            </div>
        </section>
    );
}