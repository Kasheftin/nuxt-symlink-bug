export const actions = {
  nuxtServerInit ({dispatch, commit}, context) {
    console.log('host', context.req.headers.host)
  }
}
