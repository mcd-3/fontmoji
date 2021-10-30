import { generateEmojiTextImage } from '../tools/generator.js';
import { emojifyFont } from '../tools/emojify-font.js';
import { font } from '../fonts/orthomoji.js';

emojifyFont(font, '👩‍❤️‍💋‍👨');
generateEmojiTextImage();