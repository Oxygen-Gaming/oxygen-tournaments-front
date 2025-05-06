import Amigo from '@imgs/Mision_Amigo.jpg';
import Clip from '@imgs/Mision_Clip.jpg';
import Discord from '@imgs/Mision_Discord.jpg';
import Instagram from '@imgs/Mision_Instagram.jpg';
import Quiz from '@imgs/Mision_Quiz.jpg';
import TikTok from '@imgs/Mision_TikTok.jpg';
import Twitter from '@imgs/Mision_X.jpg';
import Camiseta from '@imgs/Mision_Camiseta.jpg';
import Meme from '@imgs/Mision_Meme.jpg';
import Caca from '@imgs/Mision_Caca.jpg';

const missions = [
  { 
    id: 1, 
    title: 'Síguenos en X', 
    image: Twitter, 
    points: '120 puntos', 
    description: 'Dale click, sigue a Oxygen y disfruta de tus puntos.', 
    link: 'https://x.com/GamingOxygen',
    buttonText: 'Seguir en X'
  },
  { 
    id: 2, 
    title: 'Síguenos en Instagram', 
    image: Instagram, 
    points: '100 puntos', 
    description: 'Dale click, sigue a Oxygen y disfruta de tus puntos.', 
    link: 'https://www.instagram.com/GamingOxygen/',
    buttonText: 'Seguir en Instagram'
  },
  { 
    id: 3, 
    title: 'Síguenos en Tik Tok', 
    image: TikTok, 
    points: '110 puntos', 
    description: 'Dale click, sigue a Oxygen y disfruta de tus puntos.', 
    link: 'https://www.tiktok.com/@oxg_esports?lang=es',
    buttonText: 'Seguir en TikTok'
  },
  { 
    id: 4, 
    title: 'Completa el quiz semanal', 
    image: Quiz, 
    points: '250 puntos', 
    description: 'Vamos a medir tu ingenio, esperamos mucho de ti. Responde las preguntas de forma correcta y lo más rápido posible para llevarte el mayor número de puntos. ¿Te atreves?', 
    link: 'https://example.com/quiz-semanal',
    buttonText: 'Participar en el Quiz'
  },
  { 
    id: 5, 
    title: 'Meme del mes', 
    image: Meme, 
    points: '190 puntos', 
    description: 'Demuestra tu sentido del humor. Crea o elige el meme que hará reír a todos. ¿Tienes lo que se necesita para ser el rey del meme?', 
    link: 'https://example.com/meme-del-mes',
    buttonText: 'Enviar Meme'
  },
  { 
    id: 6, 
    title: 'Únete al discord', 
    image: Discord, 
    points: '200 puntos', 
    description: 'Dale click, sigue a Oxygen y disfruta de tus puntos.', 
    link: 'https://discord.com/invite/Udsstfpeze',
    buttonText: 'Unirse Ahora'
  },
  { 
    id: 7, 
    title: 'Invita a un amigo', 
    image: Amigo, 
    points: '250 puntos', 
    description: 'Comparte la diversión con tus amigos. Invítalos a unirse a nuestra comunidad y juntos podrán disfrutar de más momentos increíbles. ¿Quién será tu próximo compañero de aventuras?', 
    link: 'https://example.com/invita-amigo',
    buttonText: 'Invitar Ahora'
  },
  { 
    id: 8, 
    title: 'Mejor clip creadores oxygen', 
    image: Clip, 
    points: '220 puntos', 
    description: 'Muestra tu talento como fan. Envía tus mejores clips de nuestros creadores de contenido y destaca.', 
    link: 'https://example.com/mejor-clip',
    buttonText: 'Enviar Clip'
  },
  { 
    id: 9, 
    title: 'Clip de la cagada de la semana', 
    image: Caca, 
    points: '170 puntos', 
    description: 'Todos tenemos esos momentos. Comparte tu clip más divertido o embarazoso de la semana. ¿Te atreves a mostrar tu lado más torpe?', 
    link: 'https://example.com/clip-cagada',
    buttonText: 'Compartir Clip'
  },
  { 
    id: 10, 
    title: 'Hazte con la camiseta', 
    image: Camiseta, 
    points: '400 puntos', 
    description: 'Demuestra tu lealtad y estilo. No es solo una prenda, es un símbolo de tu compromiso. ¿Estás listo para lucirla?', 
    link: 'https://example.com/camiseta',
    buttonText: 'Conseguir Camiseta'
  },
];

export default missions;
