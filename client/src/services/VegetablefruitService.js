import Api from '@/services/Api'
export default {
    index() {
        return Api().get('vegetablefruitall')
    },
    show(vegetablefruitId) {
        return Api().get('vegetablefruit1/' + vegetablefruitId)
    },
    post(vegetablefruit1) {
        return Api().post('vegetablefruit1', vegetablefruit1)
    },
    put(vegetablefruit1) {
        return Api().put('vegetablefruit1/' + vegetablefruit1.id, vegetablefruit1)
    },
    delete(vegetablefruit1) {
        return Api().delete('vegetablefruit1/' + vegetablefruit1.id)
    },
}