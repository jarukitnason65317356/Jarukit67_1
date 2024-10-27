const {vegetablefruit} = require('../models');
//const vegetablefruit = require('../models/vegetablefruit');

module.exports = {
    //all vegetablefruit
    async index(req, res){
        try{
            const vegetablefruitall = await vegetablefruit.findAll();
            res.send(vegetablefruitall);
        } catch(err){
            res.status(500).send({
                error: 'เกิดข้อผิดพลาดในการดึงข้อมูล vegetablefruit'
            })
        }
    },
    async create(req, res){
        try {
            console.log(req.body)
            const vegetablefruit1 = await vegetablefruit.create(req.body);
            res.send(vegetablefruit1.toJSON());
        } catch (err) {
            res.status(400).send({
                error: 'มีข้อผิดพลาดในการสร้าง vegetablefruit'
            })
        }
    },
    async put(req, res){
        try {
            await vegetablefruit.update(req.body, {
                where: {
                    id: req.params.vegetablefruitId
                }
            });
            res.send(req.body);
        } catch (err) {
            res.status(500).send({
                error: 'มีข้อผิดพลาดในการแก้ไข vegetablefruit'
            })
        }
    },
    async remove(req, res){
        try{
            const vegetablefruit1 = await vegetablefruit.findByPk(req.params.vegetablefruitId);
            if(!vegetablefruit1){
                return res.status(403).send({
                    error: 'ไม่มี vegetablefruit นี้ในระบบ'
                })
            }
            await vegetablefruit1.destroy();
            res.send(vegetablefruit1);
        }catch(err){
            res.status(500).send({
                error: 'มีข้อผิดพลาดในการลบ vegetablefruit'
            })
        }
    },
    async show(req, res){
        try{
            const vegetablefruit1 = await vegetablefruit.findByPk(req.params.vegetablefruitId);
            res.send(vegetablefruit1);
        }catch(err){
            res.status(500).send({
                error: 'มีข้อผิดพลาดในการดึงข้อมูล vegetablefruit'
            })
        }
    }
}
    