import { getGifts } from '../../helpers/getGifts'
describe('Pruebas con getGifts Fetch', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifts('One Punch');
        expect(gifs.length).toBe(10);

    })

    test('Si no se manda ningun Gift se espera 0', async () => {
        const gifs = await getGifts('');
        expect(gifs.length).toBe(0);
        
    })
}) 