export default function DeleteButton({id,onDelete}){
    return <button className="contact-item-delete" onClick={()=>onDelete(id)}>Hapus</button>
}

