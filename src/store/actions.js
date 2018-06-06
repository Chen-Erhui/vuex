export default {
  Add (context, num) {
    context.commit('ADD')
  },
  Egg ({commit}) {
    commit('EGG')
  }
}
