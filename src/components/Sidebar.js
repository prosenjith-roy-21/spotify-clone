import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../datalayer/DataLayer'

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue()
    return (
        <div className="sidebar" >
            <img
                className="sidebar__logo"
                src="http://assets.stickpng.com/images/59b5bb466dbe923c39853e00.png"
                alt=""
            />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />

            ))}
        </div>
    )
}

export default Sidebar
