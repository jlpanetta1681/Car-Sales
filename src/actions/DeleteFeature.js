export const DELETE_FEATURE = 'DELETE_FEATURE';



export function deleteFeature(item) {
    return {
        type: DELETE_FEATURE,
        payload: item
    }
  }

